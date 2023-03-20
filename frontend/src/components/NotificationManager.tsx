import React, { Fragment } from "react";
import { Grid, Typography, Alert, Snackbar } from "@mui/material";

interface NotificationManagerProps {
  message?: string;
  success: string;
}

const NotificationManager: React.FC<NotificationManagerProps> = ({ anchor, message, response }) => {

  return (
     <Fragment>
        <Grid>
          <Snackbar open={} anchor={} onClose={} severity={response}>
            <Alert open={} onClose={}>
              {message}
            </Alert>
          </Snackbar>
        </Grid>
     </Fragment>
  );
}

export default NotificationManager;
