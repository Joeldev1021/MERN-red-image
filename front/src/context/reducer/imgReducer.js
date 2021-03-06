import { ActionImg } from "../actions/ActionImg";

export default function imgReducer (state, action) {
  switch (action.type) {
    case ActionImg.GET_IMG:
      return {
        ...state,
        images: action.payload
      };
    case ActionImg.GET_ALL_IMG:
      return {
        ...state,
        allImg: [...action.payload]
      };

    case ActionImg.ADD_IMG:
      return {
        ...state,
        images: [...state.images, action.payload]
      };

    case ActionImg.ADD_IMG_ERROR:
      return {
        ...state,
        errorNoteMessage: action.payload.message
      };

    case ActionImg.DELETE_IMG:
      return {
        ...state, images: state.images.filter(img => img._id !== action.payload)
      };

    case ActionImg.UPDATE_IMG:
      return {
        ...state,
        images: state.images.map(img => img._id === action.payload._id ? action.payload : img)
      };

    case ActionImg.UPDATE_IMG__ERROR:
      return {
        ...state,
        errorNoteMessage: action.payload.message
      };
      // add likes and delete likes
    case ActionImg.LIKE_IMG:
      return {
        ...state,
        allImg: state.allImg.map((img) => {
          if (img._id === action.payload.imgId) {
            if (img.likes.includes(action.payload.userId)) {
              return {
                ...img,
                likes: img.likes.filter(like => like !== action.payload.userId)
              };
            }
            return {
              ...img,
              likes: [...img.likes, action.payload.userId]
            };
          }
          return img;
        })
      };
    // commets
    case ActionImg.COMMENT_IMG:
      return {
        ...state,
        commentByImg: [...state.commentByImg, action.payload.comment],
        allImg: state.allImg.map(img => {
          if (img._id === action.payload.imgId) {
            return {
              ...img,
              comments: [...img.comments, action.payload.commentId]
            };
          } else {
            return img;
          }
        })
      };
    case ActionImg.GET_COMMENTS:
      return {
        ...state,
        commentByImg: [...action.payload]
      };

    default:
      return { massage: "default" };
  }
};
