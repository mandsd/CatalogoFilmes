function InputNota(props) {
  return (
  <>
  <label htmlFor="nota">Nota</label>
  <input type="number" id="nota" name="nota" value={props.valor} onChange={props.onChange} />
  {props.erro && <p>{props.erro}</p>}
  </>
  );
}

export default InputNota;