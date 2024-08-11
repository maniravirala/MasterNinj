
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ start = 0, end = -1 }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const effectiveEnd = end === -1 ? pathnames.length : end;

  const breadcrumbPathnames = pathnames.slice(start, effectiveEnd);
  const ignoredPathnamess = pathnames.slice(0, start);

  return (
    <nav className="mb-4">
      <ol className="flex items-center whitespace-nowrap"> 
        {breadcrumbPathnames.map((value, index) => {
          const to = `/${ignoredPathnamess.join('/')}/${breadcrumbPathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === breadcrumbPathnames.length - 1;
          return (
            <li key={to} className="inline-flex items-center">
              {!isLast ? (
                <Link to={to} className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">
                  {value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ')}
                </Link>
              ) : (
                <span className="text-sm text-gray-500 dark:text-neutral-500">
                  {value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ')}
                </span>
              )}
              {!isLast && (
                <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
