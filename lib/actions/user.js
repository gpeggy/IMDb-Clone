import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import User from '../models/user.model';
import { connect } from '../mongodb/mongoose';

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_adresses
) => {
    try {
        await connect();
        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    profilePicture: image_url,
                    email: email_adresses[0].email_address,
                },
            },
            { upsert: true, new: true }
        );
        return user;
    } catch (error) {
        console.error('Error: Could not create or update user:', error);
    }
};
export const deleteUser = async (id) => {
    try {
        await connect();
        await User.findOneAndUpdate ({ clerkId: id });
    } catch (error) {
        console.error('Error: Could not delete user:', error);
    }
};
