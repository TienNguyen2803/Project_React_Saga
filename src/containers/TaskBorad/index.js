import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { STATUS } from "../../constants/index";
import TaskList from "../../components/TaskList";
import { Grid, Button } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import TaskForm from "../TaskForm";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as taskActions from "../../actions/tasks";
import SearchBox from "../../components/SearchBox";
import * as modalActions from "../../actions/modalGlobal";
import ModalGlobal from "../../components/ModalGlobal";
class TaskBoard extends Component {
  componentDidMount() {
    const { onTaskActions } = this.props;
    const { fetchTasks } = onTaskActions;
    fetchTasks();
  }
  handleOnEdit = (task) => {
    const { onTaskActions } = this.props;
    const { taskEditting } = onTaskActions;
    taskEditting(task);
    const { onModalActions } = this.props;
    const { showModal, changeTitleModal, changeContentModal } = onModalActions;
    showModal();
    changeTitleModal("Cập nhật công việc");
    changeContentModal(
      <TaskForm
        handleSubmitForm={this.handleSubmitForm}
        onClose={this.onClose}
        showModal={showModal}
      />
    );
  }
  handleFilter = (e) => {
    const { onTaskActions } = this.props;
    const { fetchFilter } = onTaskActions;
    const { value } = e.target;
    fetchFilter(value);
  };
  onClose = () => {
    const { onModalActions } = this.props;
    const { hideModal } = onModalActions;
    hideModal();
  };
  onOpenForm = () => {
    const { onTaskActions } = this.props;
    const { taskEditting } = onTaskActions;
    taskEditting(null);
    const { onModalActions } = this.props;
    const { showModal, changeTitleModal, changeContentModal } = onModalActions;
    showModal();
    changeTitleModal("Thêm mới công việc");
    changeContentModal(
      <TaskForm
        handleSubmitForm={this.handleSubmitForm}
        onClose={this.onClose}
        showModal={showModal}
      />
    );
  };
  handleSubmitForm = (data) => {
    console.log("data", data);
  };

  handleOnDelete = (id) => {
    const { onTaskActions } = this.props;
    const { actDeleteTask } = onTaskActions;
    actDeleteTask(id);
  }


  renderSearchBox = () => {
    let html = null;
    html = <SearchBox handlChange={this.handleFilter} />;
    return html;
  };
  renderTaskForm = () => {
    const { component, title, showModal } = this.props;
    let html = null;
    html = (
      <ModalGlobal
        component={component}
        onClose={this.onClose}
        title={title}
        showModal={showModal}
      />
    );
    return html;
  };
  renderTaskBoard = () => {
    let { listTask } = this.props;

    let html = null;
    html = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const listTaskFilter = listTask.filter(
            (tasks) => tasks.status === status.value
          );
          return (
            <TaskList
              key={status.value}
              status={status}
              tasks={listTaskFilter}
              onEdit={this.handleOnEdit}
              onDelete ={this.handleOnDelete}
            />
          );
        })}
      </Grid>
    );
    return html;
  };


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" onClick={this.onOpenForm}>
          <AddIcon />
          Thêm mới công việc
        </Button>
        {this.renderSearchBox()}
        {this.renderTaskBoard()}
        {this.renderTaskForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTask: state.tasks.listTasks,
    showModal: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTaskActions: bindActionCreators(taskActions, dispatch),
    onModalActions: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskBoard);
