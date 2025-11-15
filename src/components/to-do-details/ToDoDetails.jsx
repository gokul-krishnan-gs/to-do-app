import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

 export default function ToDoDetails({toDoDetails,openDialog,setOpenDialog,setToDoDetails}){
    return (
        <>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>
                    {toDoDetails ? toDoDetails.todo : ""}
                </DialogTitle>

                <DialogActions>
                    <Button
                        onClick={() => {
                            setToDoDetails(null)
                            setOpenDialog(false)
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        
        </>
    );
 } 