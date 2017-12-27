import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense page
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help page
    </div>
);

const NotFoundPage = () => (
    <div>
        404! - The page you are looking for does not exist <br/>
        <Link to="/">Go to home page</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;