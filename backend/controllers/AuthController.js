const User = require('../models/AUTH');
const ImageCloudinary = require('../utils/ImageCloudinary');
const sendToken = require('../utils/jsonWebToken')
const { STATUS_CODE } = require('../constants/index')

exports.register = async (req, res, next) => {

    try {

        const userData = req.body;

        if (!req.file) {
            return res.status(STATUS_CODE.INTERNALSERVERERROR)
                .json({
                    success: false,
                    message: 'File image required'
                })
        }

        userData.avatar = await ImageCloudinary.uploadSingle(req.file.path, 'avatars');

        const user = await User.create(userData);

        if (!user) {
            return res.status(STATUS_CODE.SUCCESS)
                .json({
                    success: true,
                    user,
                    message: `Failed to create your account`,
                })
        }

        return res.status(200).json({
            success: true,
            user,
            message: `Welcome ${user.name} to OrderNaBai Food E-store`,
        })

    } catch (err) {
        console.log(err)
        res.status(STATUS_CODE.INTERNALSERVERERROR)
            .json({
                success: false,
                message: "Internal server error",
            })
    }

}
