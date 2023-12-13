import { configureStore } from "@reduxjs/toolkit";
import cardTextReducer from "./reducers/cardText";
import cardTitleReducer from "./reducers/cardTitle";
import cardFooterReducer from "./reducers/cardFooter";

export const store = configureStore({
    reducer: {
        cardTitleReducer,
        cardTextReducer,
        cardFooterReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
