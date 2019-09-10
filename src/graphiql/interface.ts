export interface IBaseQueryIndex{

};

export interface ILoginInputType{
    email: string,
    password: string
};

export interface ICreateUserInputType extends ILoginInputType{
    name: string
}

export interface IUserQueryIndex{
    id?: number,
    name?: string,
    email?: string,
}

export interface IBaseEntity{
    id: number,
    createdAt: Date,
    updatedAt: Date,
};

export interface IUser extends IBaseEntity,ICreateUserInputType{
    
};

export interface IAuth{
    token: string,
    user: IUser
};


export interface IContext{
    user: IUser
}