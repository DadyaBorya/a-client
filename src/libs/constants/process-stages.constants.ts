import { HstsMvsStage } from '@/graphql/generated/output'

export const HSTS_MVS_STAGES: Record<HstsMvsStage, string> = {
	[HstsMvsStage.NotStarted]: 'Не розпочато',
	[HstsMvsStage.ParseDriverLicence]: 'Обробка водійського посвідчення',
	[HstsMvsStage.ValidateDriverLicence]: 'Валідація водійського посвідчення',
	[HstsMvsStage.ParseCarInfo]: 'Обробка інформації про автомобіль',
	[HstsMvsStage.ValidateCarInfo]: 'Валідація інформації про автомобіль',
	[HstsMvsStage.ModifyData]: 'Модифікація даних',
	[HstsMvsStage.GenerateResultData]: 'Генерація результатів',
	[HstsMvsStage.Finished]: 'Завершено'
}
