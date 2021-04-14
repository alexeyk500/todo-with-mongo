import TodoPage from './TodoPage';
import {connect} from 'react-redux';
import {setTodoList, setIsFetching} from './../../store/TodoPage/actions';
import {setIsAutorised} from './../../store/Login/actions';
import RedirectToLogin from './../common/RedirectLogin/RedirectLoginContainer';
import {compose} from 'redux';

const mapStateToProps = (state) => {
  return(
    {
      todoList: state.todoPage.todoList,
      isFetching: state.todoPage.isFetching,
    }
  )
}

const mapDispatchToProps = {
  setTodoList, setIsFetching, setIsAutorised
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  RedirectToLogin
)(TodoPage)
