import { rest } from msw

const baseURL = "https://activities-backend-api-a2cb7e703660.herokuapp.com/"

export const handlers = [
    rest.get(`$(baseURL)dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 4,
            "username": "Oliver",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 4,
            "profile_image": "https://res.cloudinary.com/kesmith/image/upload/v1/media/images/Screen_Shot_2023-06-30_at_15.41.31_e2nwis"
            }),
            rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
                return res(ct.status(200));
            }),
            );
    }),
];
