import { html } from '../../node_modules/lit-html/lit-html.js';

const login = () => html`
  <div>
    <h1>Log in to bookme</h1>
    <form>
      <input type="email" />
      <input type="password" />
      <button type="submit">Log in</button>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </form>
  </div>
`;

export default login;