/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import jwt from 'jsonwebtoken';

type userTypes = {
    email: string,
    id: string
}

//generation of token
const secret: string = process.env.JWT_SECRET as string;
const days: string = process.env.JWT_EXPIRES_IN as string
export const signToken = (user : any) => {
    const { id, email } = user;
    return jwt.sign({ id, email }, secret, {
        expiresIn: days,
    });
}

