class Validator {
    constructor() {
        // 验证结果
        this.validedMsgs = [];
        // 验证策略
        this.strategy = {
            min(value = '', minLength = 0) {
                return value.length >= minLength;
            },
            max(value = '', maxLength = 0) {
                return value.length <= maxLength;
            }
        };
    }

    // 值是否为指定的类型
    isType(value, type) {
        return Object.prototype.toString.call(value) === `[object ${type}]`;
    }

    // 添加策略
    addStrategy(strategies = {}) {
        // console.log(strategies);
        // return;
        if (!this.isType(strategies, 'Object')) {
            console.error('添加策略参数必须为json格式');
            return;
        }
        for (let key in strategies) {
            let fn = strategies[key] || function() {};
            if (!this.isType(fn, 'Function')) {
                console.error('策略必须为函数');
                return;
            }
            if (this.strategy[key]) {
                console.warn(`${key}策略被覆盖`);
            }
            this.strategy[key] = fn;
        }
    }

    getStrategies() {
        return this.strategy;
    }

    /**
     * 触发验证
     * @param {String or Object} value 验证的值
     * @param {String} rules 验证规则 "min:8|max:16"
     * @param {Object} errorMsg 验证错误提示信息 { rule1: msg1, rule2: msg2 }
     */
    emit(value, rules, errorMsg) {
        let ruleArray = rules.split('|');
        for (let i = 0, length = ruleArray.length; i < length; i++) {
            let validUnit = ruleArray[i].split(':');
            let strategy = validUnit[0];
            let param = validUnit[1];
            if (!this.strategy[strategy]) {
                console.error(`￥${strategy}策略不存在`);
                continue;
            }
            // 验证失败
            if (!this.strategy[strategy](value, param)) {
                let errMsg = this.isType(errorMsg[strategy], 'Object') ? errorMsg[strategy] : errorMsg;
                this.validedMsgs.push(errMsg);
            }
        }
    }
}

module.exports = {
    validator() {
        return new Validator();
    }
};

// var v = new Validator();
// v.addStrategy({
//     isString(value) {
//         return Object.prototype.toString.call(value) === '[object String]';
//     }
// });

// v.emit(666, 'isString|max:16|min:6', {
//     max: '不多于16',
//     min: '不少于6',
//     isString: '不是字符串'
// });
// console.log(v.validedMsgs, v.getStrategies());
