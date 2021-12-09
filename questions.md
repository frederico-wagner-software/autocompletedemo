1) What is the difference between Component and PureComponent? give an
example where it might break my app.
Answer: PureComponent does a shallow comparison on state change. It might break when comparing more complex types like Objects and Arrays.

2) Context + ShouldComponentUpdate might be dangerous. Can think of why
is that?
Answer: rendet() will not be evoked if ShouldComponentUpdate returns false.

3) Describe 3 ways to pass information from a component to its PARENT.
Answer:
You can use callbacks, use Redux to manage states or use React's Context API.

4) Give 2 ways to prevent components from re-rendering.
Answer: You can use the shouldComponentUpdate method or a React.PureComponent class extension to prevent a component from re-rendering.
Another option is to use React.memo() if using React function components.

5) What is a fragment and why do we need it? Give an example where it
might break my app.
Answer: Fragments are a way of adding multiple elements to a React Component without wrapping them in an extra DOM node.

6) Give 3 examples of the HOC pattern.
Anwser:
// Take in a component as argument WrappedComponent
    function simpleHOC(WrappedComponent) {
      // And return a new anonymous component
      return class extends React.Component{
        render() {
          return <WrappedComponent {...this.props}/>;
        }
      }
    }

7) what's the difference in handling exceptions in promises, callbacks and
async...await.
Answer: Callbacks are an old way of handling async data processing.
Promises Are the new way of doing. the promise has 3 states: pending, resolved and rejected.
Async / await is also a new syntax from ES6 for dealing with async processing.

8) How many arguments does setState take and why is it async.
Answer: setState expects 2 arguments. It's async because it holds the state during parallel processing.

9) List the steps needed to migrate a Class to Function Component.
Answer: The steps are:
Change the class to a function.
Remove the render method.
Convert all methods to functions.
Remove references to this.
Remove constructor.
Replace this.
useEffect for state update side effects.
Replace lifecycle methods with hooks. 

10) List a few ways styles can be used with components.
Answer: There are some ways to do that:
Add the Global Styles to "index.html" file.
Create a style for each individual component.
Add inline style to react component elements.
Attach style property to JavaScript Style Object.

11) How to render an HTML string coming from the server.
Answer: We can use dangerouslySetInnerHTML to render HTML.