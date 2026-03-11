import { getApiV10PageConfig } from '@api/endpoints/page-config'
import type { GetApiV10PageConfigParams } from '@api/models'

export const getPageConfig = async (params?: GetApiV10PageConfigParams) => {
  try {
    return await getApiV10PageConfig(params)
  } catch  {
    return { responseData: { page_config_tab: [] } }
  }
}
