import { useState } from "react";
import "./assets/plugin/bootstrap/css/bootstrap.min.css";
import InputTodo from "./components/InputTodo/InputTodo";
import ListTodo from "./components/ListTodo/ListTodo";

function App() {
    const [id, setId] = useState(0);
    const [todo, setTodo] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);

    const getTodo = (id, todo) => {
        setId(id);
        setTodo(todo);
        setIsUpdate(true);
    };

    const updateDone = () => setIsUpdate(false);
    return (
        <>
            <main>
                <center>
                    <section>
                        <div className="row">
                            <div className="col-md my-5">
                                <h1 className="my-3">
                                    What's the plan for today ?
                                </h1>
                                <div className="col-md w-50 justify-content-center">
                                    <InputTodo
                                        id={id}
                                        todoUpdate={todo}
                                        isUpdate={isUpdate}
                                        done={updateDone}
                                    />

                                    <ListTodo getTodo={getTodo} />
                                </div>
                            </div>
                        </div>
                    </section>
                </center>
            </main>
        </>
    );
}

export default App;
