/**
 * Created by Shuhei on 2016/10/08.
 */
export default function(state = null, action){
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}