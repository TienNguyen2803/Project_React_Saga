import {combineReducers} from 'redux';
import tasks from '../reducers/tasks';
import ui from '../reducers/ui';
import modal from '../reducers/modalGlobal';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    tasks,
    ui,
    modal,
    form: formReducer
})
export default rootReducer;
