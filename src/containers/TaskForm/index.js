import React, { Component } from "react";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { reduxForm } from "redux-form";
import validate from "./validate";
import renderTextField from "../../components/FormHelper/TextField";
import { Field } from "redux-form";
import { withStyles, Grid, Button, Box } from "@material-ui/core";
import { connect } from "react-redux";
import * as taskActions from "../../actions/tasks";
import * as modalActions from "../../actions/modalGlobal";
import renderSelectField from "../../components/FormHelper/Select";

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    const { onTaskActions , taskEditing } = this.props;
    const { addTasks , updateTask } = onTaskActions;
    if(taskEditing && taskEditing.id){
      data.status = parseInt(data.status , 10);
      updateTask(data);
    }else{
      addTasks(data);
    }

  };

  onClose = () => {
    const { onModalActions } = this.props;
    const { hideModal } = onModalActions;
    hideModal();
  };
  render() {
    const { classes, invalid, submitting, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              className={classes.textField}
              margin="normal"
              name="description"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              classes={classes.select}
              name="status"
              component={renderSelectField}
              label="Trạng thái"
            >
              <option value="0">READY</option>
              <option value="1">IN PROPRESS</option>
              <option value="2">COMPLETE</option>
            </Field>
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button
                  variant="contained"
                  onClick={this.onClose}
                  color="default"
                >
                  Huỷ bỏ
                </Button>
              </Box>
              <Button
                type="submit"
                disabled={invalid || submitting}
                variant="contained"
                color="primary"
              >
                Lưu lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}
const withReduxFrom = reduxForm({
  form: "tasks",
  validate,
});
const mapStateToProps = (state) => {
  return {
    showModal: state.modal.showModal,
    taskEditing: state.tasks.taskEditing,
    initialValues: state.tasks.taskEditing,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTaskActions: bindActionCreators(taskActions, dispatch),
    onModalActions: bindActionCreators(modalActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxFrom
)(TaskForm);
