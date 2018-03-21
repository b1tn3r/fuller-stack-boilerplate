var React = require('react');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');

var { fetchContests } = require('../../redux/actions/mainActions');


const mapStateToProps = (state, ownProps) => {      // passes in both the 'state' data but also the 'ownProps' that are specific to the Contest component below that it receives from the 'Route' component that passes it the {...props} in Main.js.. And this way we can manipulate both state and ownProps data together if we need to manage the data in some way
    //console.log(ownProps);                        // shows the 'history' 'location' and 'match' props passed down from the Route to Contests
    return {
        contests: state.main.contests,
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {            // binds all the actions in 'mainActions' to the dispatch function and makes them available in 'this.props' of the Home Component so we can call any action we added in it as 'this.props.sayHello()' without having to call this.props.dispatch()
    return bindActionCreators({
        fetchContests: fetchContests                            // binds fetchContests to the dispatch() so that fetchContests() can be called directly in Contests as this.props.fetchContests()
    }, dispatch)
    // return bindActionCreators(allActions, dispatch)          // can also add ALL the 'actions' or you could designate specific actions to add so only the ones used in the component are available
};
// function mergeProps(stateProps, dispatchProps, ownProps)     // this function has the returned results of stateToProps and dispatchToProps passed into it along with the component props (passed to the specific container below) and then the returned result from mergeProps will be passed into the wrapped component below. This function can be used to manipulate the binded actions from dispatchToProps and the state data from stateToProps together if some reason is needed (or use both with the ownProps) and then pass the manipulated data to the below component. An example would be to bind an action (action creator) to a particular variable from props or from the state


//@connect(mapStateToProps)
//@connect(mapDispatchToProps)      // use both decorators instead of one if you need to pass in this.props.dispatch into the component as well on top of the binded actions in mapDispatchToProps (the dispatchToProps func will remove dispatch() from being passed in since all our binded actions should be all we need to dispatch in the component)

@connect(mapStateToProps, mapDispatchToProps)       // passes in both the 'state' data and the binded actions that, when called, will dispatch directly without 'dispatch()' and 'dispatch()' will no longer be included in the component's this.props either anymore as a result
class Contests extends React.Component {

    componentDidMount() {
        if(!this.props.contests) {
            this.props.fetchContests();
        }
    }

    render() {
        return (
            <div>
                <ul class="list-group">
                    {
                        this.props.contests ?
                            Object.values(this.props.contests).map(contest =>
                                <li key={contest._id}
                                    class="list-group-item list-group-item-action"
                                    data-toggle="list"
                                >
                                    <h5 class="ml-1 text-info">Contest ID: {contest._id}</h5>
                                    <div key={`${contest._id}-category`}
                                        class="list-group-item list-group-item-action"
                                        data-toggle="list"
                                    >
                                    Category: {contest.categoryName}
                                    </div>
                                    <div key={`${contest._id}-contest`}
                                        class="list-group-item list-group-item-action"
                                        data-toggle="list"
                                    >
                                    Contest: {contest.contestName}
                                    </div>
                                    <div key={`${contest._id}-desc`}
                                        class="list-group-item list-group-item-action"
                                        data-toggle="list"
                                    >
                                        <p>Description:</p>{contest.description}
                                    </div>
                                </li>
                            )
                        : "..."
                    }
                </ul>
            </div>
        )
    }
}


module.exports = Contests;