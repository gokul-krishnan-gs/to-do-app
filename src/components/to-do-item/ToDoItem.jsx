import { Typography,Card, CardActions, Button } from "@mui/material";

export default function ToDoItem({ todo, fetchDetailsOfCurrentToDo }) {
    return (
        <Card
            sx={{
                maxWidth: 350,
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Typography variant="h6" color="text.secondary">
                {todo.todo}
            </Typography>

            <CardActions>
                <Button

                    onClick={()=>{fetchDetailsOfCurrentToDo(todo.id)}}
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        opacity: 0.75,
                        "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                            opacity: 1,
                        },
                    }}
                >
                    Show Details
                </Button>
            </CardActions>
        </Card>
    );
}
