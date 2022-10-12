const { getLocalStorage } = require('../localStorage');

const user = getLocalStorage('user');
export const keyResults = {
    name: '',
    description: '',
    deadline: '',
    progress: '0',
    commits: null,
    createdAt: null,
    updateAt: null,
};
export const newObjective = {
    name: '',
    type: '',
    description: '',
    deadline: '',
    userId: user._id,
    createdAt: null,
    updateAt: null,
    progress: 0,
    __v: '',
};
export const signupUser = {
    firstName: '',
    email: '',
    lastName: '',
    password: '',
};
