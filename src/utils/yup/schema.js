import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('enter your email'),
    password: Yup.string().required('enter your password'),
});
export const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too short').required('   Enter your firstName'),
    email: Yup.string().email('Invalid email').required('   Enter your email'),
    lastName: Yup.string().min(2, 'Too short').required('   Enter your lastName'),
    password: Yup.string().min(6, 'Weak password').required('   Enter your password'),
});
export const ObjectiveSchema = Yup.object().shape({
    newObjective : Yup.object().shape({
        name: Yup.string().required('Nhập tên objective'),
        type: Yup.string().required('Chọn loại Objective'),
        description: Yup.string().required('Nhập mô tả của Objective'),
        deadline: Yup.date().required('Chọn ngày đến hạn của objective'),
    }),
    keyResults: Yup.object().shape({
        name: Yup.string().required('Nhập tên key result'),
        description: Yup.string().required('Nhập mô tả của key result'),
        deadline: Yup.date().required('Nhập ngày deadline của key result'),
    }),
});
export  const UserSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'too short').required('  Enter your first name'),
    lastName: Yup.string().min(2, 'too short').required('  Enter your last name'),
    password: Yup.string().required('  Enter your password'),
    address: Yup.string().required(' Enter your address'),
    dob: Yup.date().required('  Choose your birthday'),
    phoneNumber: Yup.string().required('  Enter your phone'),
});