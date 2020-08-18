import { withStyles } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import { Box, Grid } from "@material-ui/core";
import TaskItem from "../TaskItem";
import styles from "../../containers/TaskBorad/styles";
class TaskList extends Component {

  render() {
    const { classes, status, tasks,onEdit,onDelete } = this.props;
    return (
      <Fragment>
        <Grid item md={4} xs={12} key={status.value}>
          <Box mt={2} mb={2}>
            <div className={classes.status}>{status.label}</div>
          </Box>

          <div className={classes.warraperListTask}>
            {tasks.map((tasks) => {
              return <TaskItem key={tasks.id} task={tasks} status={status} onEdit={onEdit} onDelete={onDelete}/>;
            })}
          </div>
        </Grid>
      </Fragment>
    );
  }
}


export default withStyles(styles)(TaskList);
