import { withStyles } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import styles from "./styles";
import {
  Typography,
  CardContent,
  CardActions,
  Card,
  Grid,
  Icon,
  Fab,
} from "@material-ui/core";
class TaskItem extends Component {
  render() {
    const { classes, task, status ,onEdit,onDelete} = this.props;
    return (
      <Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={1} justify="space-between">
              <Grid item md={8}>
                <Typography component="h2">{task.title}</Typography>
              </Grid>
              <Grid item md={4}>
                {status.label}
              </Grid>
            </Grid>
          </CardContent>
          <p>{task.description}</p>
          <CardActions className={classes.cardActions}>
            <Fab
              color="primary"
              aria-label="Edit"
              className={classes.fab}
              size="small"
              onClick={() => onEdit(task)}
            >
              <Icon fontSize="small">edit_icon</Icon>
            </Fab>
            <Fab
              color="primary"
              aria-label="Delete"
              className={classes.fab}
              size="small"
            >
              <Icon fontSize="small" onClick={() => onDelete(task.id)}>delete_icon</Icon>
            </Fab>
          </CardActions>
        </Card>
      </Fragment>
    );
  }
}

export default withStyles(styles)(TaskItem);
