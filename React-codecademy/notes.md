1. a JSX expression must have exactly one outermost element. The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element.
  return(
    <div>
      <h1>Hello world</h1>
    </div>
  );

2. ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));
  @a. *ReactDOM* is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.
    ReactDOM.render
      -OR-
    import 'ReactDOM' from 'react-dom';

  @b. *ReactDOM.render* is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM.

  @c. *document.getElementById('app')* -- The first argument (<h1>Hello world</h1>) is appended to whatever element is selected by the second argument (document.getElementById('app')).
    So the React component appends to the `main` element in the HTML file:
      <body>
        <main id="app"></main>
      </body>

  @d. One special thing about ReactDOM.render is that it only *updates* DOM elements that have changed. So if you render the same thing twice, the second render will do nothing.


3. Virtual DOM --
  In React, for every DOM object, there is a corresponding "virtual DOM object." A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen.

4. In JSX, you have to include the slash in self-closing tags. If you write a self-closing tag in JSX and forget the slash, you will raise an error.

5. *Event listeners*:
  https://facebook.github.io/react/docs/events.html#supported-events
  Event Listeners use the word `on`, plus the type of event that you're listening for
    onClick={}
    onMouseOver={}

6. *If statements* -- You can not inject an if statement into a JSX expression.

7. *.map and keys* -- A list needs keys if either of the following are true:
  @a. The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
  @b. A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
