// import Database from 'better-sqlite3';
//
// const db = new Database('todoapp.db');
// db.pragma('journal_model = WAL');

type TodoItem = {
    todo: string;
    description: string;
    priority: number;
};

export function addTodoItem(item: TodoItem) {
    // Here comes the SQL
    // const sql = `INSERT INTO todos (todo, description, priority) 
    // VALUES ($todo, $description, $priority)`;
    // const statement = db.prepare(sql);
    // statement.run(item);
    // return item;
    return {}
}

export function getTodoItems(){
    // const sql = 'SELECT * FROM todos';
    // const statement = db.prepare(sql)
    // return statement.all()
    return []
}
