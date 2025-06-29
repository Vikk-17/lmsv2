import { Schema, model, Document, Types } from 'mongoose';


export interface IAdmin extends Document {
  _id: Types.ObjectId; 
  permissions: ('manage_users' | 'manage_courses' | 'manage_admin' | 'view_reports' | 'edit_settings')[];
  isSuperAdmin: boolean;
  lastLogin?: Date;
}


const adminSchema = new Schema<IAdmin>({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  permissions: {
    type: [String],
    enum: ['manage_users', 'manage_courses', 'manage_admin', 'view_reports', 'edit_settings'],
    default: ['manage_users', 'manage_courses', 'view_reports'],
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
  },
});


const Admin = model<IAdmin>('Admin', adminSchema);
export default Admin;
