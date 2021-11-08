import fetcher from 'src/lib/swr';
import useSWR, { SWRConfiguration } from 'swr';
import { DUMMY_DATA_LIST } from 'src/api/endpoint/demo';
import { IApiDummy } from 'src/types/api/demo';

// eslint-disable-next-line import/prefer-default-export
export function useDummyList(options?: SWRConfiguration) {
  const { data, error } = useSWR<IApiDummy[]>(
    DUMMY_DATA_LIST,
    (url) => fetcher<IApiDummy[]>(url),
    options,
  );
  return {
    data,
    loading: !error && !data,
    error,
  };
}
