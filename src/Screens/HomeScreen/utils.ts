import { TBreadcrumb } from "types/types";

type TUpdateBreadcrumbsProps = {
  breadcrumbs: TBreadcrumb[];
  newBreadscrum: TBreadcrumb;
}

export const updateBreadcrumbs = ({ 
  breadcrumbs, newBreadscrum,
}: TUpdateBreadcrumbsProps) => {

  // NOTE: find the index of the current level in the breadcrumb trail
  const currentIndex = breadcrumbs
    .findIndex((item) => item.level === newBreadscrum.level);
  

  // NOTE: update breadcrumb trail based on the current level
  const updatedTrail = currentIndex !== -1 
  ? [...breadcrumbs.slice(0, currentIndex + 1), newBreadscrum] 
  : [...breadcrumbs, newBreadscrum];

  return updatedTrail;
};
