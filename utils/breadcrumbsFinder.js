import breadcrumbs from '@/constants/breadcrumbs';

export const breadcrumbsFinder = ({ array, id }) => {
	const constBreadcrumbs = breadcrumbs[id];
	const dynamicBreadcrumb = array.find((e) => Number(e.id) === Number(id))?.name;
	return constBreadcrumbs || dynamicBreadcrumb;
};
