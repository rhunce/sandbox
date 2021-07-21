import ThemedButton from './ThemedButton.js';

export default function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme} />
}