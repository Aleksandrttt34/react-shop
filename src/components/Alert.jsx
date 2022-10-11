import { useEffect } from "react";

function Alert(props) {
  const { displayName = "", closeAlert = Function.prototype } = props;
  console.log(displayName);
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [displayName]);

  return (
    <div id="toast-container">
      <div className="toast">{displayName}</div>
    </div>
  );
}

export { Alert };
