import API from "@/src/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetProducts(
  args:
    | {
        orderBy?: "abc" | "popular";
      }
    | undefined
) {
  return useQuery({
    queryKey: ["products", args && { orderBy: args.orderBy }],
    queryFn: () => API.products.getProducts({ orderBy }),
  });
}
