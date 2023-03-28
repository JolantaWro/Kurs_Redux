// Tu dodaj odpowiednie importy (createStore, akcje, reducer)
import {createStore} from './redux/customStore'
import {decrement, increment} from "./redux/actions/counterActions";
import counter from "./redux/reducers/counter";


export default function () {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1

    const {dispatch, subscribe, getState} = createStore(counter);

    const unsubscribe = subscribe(() => {
        console.log(`from subscribe ${getState()}`);
    });

    dispatch(increment(5));
    dispatch(decrement(2));
    unsubscribe()
    dispatch(decrement(2));
    console.log(getState());

}
