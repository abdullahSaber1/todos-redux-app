export default theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: "100vh",
        width: "100vw",
        padding: "3rem 1rem 1rem 1rem"
    },
        header: {
        textAlign: "center"
    },
    newTodo: {
        color: "white",
        width: "94%",
        maxWidth: "370px",
        margin: "0 auto"
    },
    sendIcon: {
        marginTop: "30px",
        cursor: "pointer"
    },
    container: {
        background: 'white',
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto"
    },
    todo: {
        //
        // textDecoration: props => props.isDone ? 'line-through' : 'none'
    },
    isDone: {
        textDecoration: "line-through"
    }
});