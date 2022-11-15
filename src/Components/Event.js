import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../actions";
import { timeCurrent } from "../utils";

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext);
    const handleClick = () => {
        const result = window.confirm(`   イベント${event.id}を削除しても良いですか？`)
        if (result) {
            dispatch({ type: DELETE_EVENT, id: event.id })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: `イベント(id=${event.id})を削除しました。`,
                operatedAt: timeCurrent()
            })
        }
    }
    return (
        <tr >
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type="button" onClick={handleClick}>削除</button></td>
        </tr>
    )
}


export default Event;