import { DUMMY_DATA_LIST } from 'src/api/endpoint/demo';
import { IApiDummy } from 'src/types/api/demo';
import useSWR, { SWRConfiguration } from 'swr';

// eslint-disable-next-line import/prefer-default-export
export function useDummyList(options?: SWRConfiguration) {
  const { data, error } = useSWR<IApiDummy[]>(DUMMY_DATA_LIST, options);
  return {
    data,
    loading: !error && !data,
    error,
  };
}
