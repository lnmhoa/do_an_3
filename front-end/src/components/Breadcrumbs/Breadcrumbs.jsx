import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";

const userNamesById = { 1: "John" };

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

const routes = [
  { path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb },
  { path: "/list-accessory", breadcrumb: "Custom Example" },
  {
    path: "/custom-props",
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: "Hi" },
  },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  console.log(breadcrumbs);

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </>
  );
};

export default Breadcrumbs;