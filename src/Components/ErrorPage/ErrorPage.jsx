import { Button, Result } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
      const userInfo = useSelector((state) => state.auth?.userInfo);
  // console.log(userInfo);
    const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={() => navigate(`/${userInfo?.role}/dashboard`)} type="primary">
          Back Home
        </Button>
      }
    />
  );
};
export default ErrorPage;
