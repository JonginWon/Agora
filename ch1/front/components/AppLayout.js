import PropType from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">노드버드</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/signup">회원가입</Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.prototype = {
  children: PropType.node.isRequired,
};

export default AppLayout;
