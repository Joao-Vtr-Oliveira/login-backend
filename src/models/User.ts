import { Schema, model, connection, Model } from 'mongoose';

type UserType = {
  email: string;
  password: string;
}

const schema = new Schema<UserType>({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

const modelName: string = 'User';

export default (connection && connection.models[modelName]) ?
  connection.models[modelName] as Model<UserType> // Se o model já possui, retorne ele
  :
  model<UserType>(modelName, schema) // Se não possui, crie e retorne