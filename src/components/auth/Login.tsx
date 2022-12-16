import { ReactComponent as LeafSvg } from "../../assets/svgs/leafs-svg.svg";

const Login: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="login flex flex-col al-center">
      <LeafSvg />
      <div className="text-container">
        <div className="h1">איזה כיף שבאת</div>
        <div className="p1">כדי להתחבר יישלח לך קוד אימות חד-פעמי ב-SMS</div>
      </div>
      <form
        onSubmit={() => {
          console.log("hey");
        }}
      >
        <input
          type="tel"
          placeholder="טלפון נייד"
          pattern="[0-9]{3}-[0-9]{7}"
          required
          onChange={(ev) => handleChange(ev)}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Login;
