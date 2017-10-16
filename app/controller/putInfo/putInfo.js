module.exports = app => {
    return class PutInfoController extends app.Controller {
        // 获取页面
        async getPage (ctx) {
            await ctx.page('putInfo/putInfo.js');
        }
        async postInfo (ctx) {
            const { name, department, sex, idNo } = ctx.request.body;
            // 验证
            const validator = ctx.validator();
            validator.emit(name, 'min:1|max:20', '姓名应为1到20个字符');
            validator.emit(sex, 'min:1', '请选择性别');
            // validator.emit(department, 'min:1', '请选择部门');
            validator.emit(idNo, 'min:15|max:18', '请填写身份证号码');
            if (validator.validedMsgs[0]) {
                ctx.body = {
                    msgCode: 610,
                    message: validator.validedMsgs[0],
                    result: null
                };
                return;
            }
            // 查找重复
            const Info = ctx.model.Info;
            const exist = await Info.find({ idNo });
            if (exist[0]) {
                ctx.body = {
                    msgCode: 601,
                    message: '已存在此姓名信息',
                    result: null
                };
                return;
            }
            // 插入信息
            const result = await Info.create({
                name,
                department,
                sex,
                idNo
            });
            ctx.body = {
                msgCode: 100,
                message: '提交成功',
                result
            };
        }
    };
};
