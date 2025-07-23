import {
	DmsuStage,
	HstsMvsStage,
	ProcessType
} from '@/graphql/generated/output'

export const HSTS_MVS_STAGES: Record<HstsMvsStage, string> = {
	[HstsMvsStage.NotStarted]: 'Не розпочато',
	[HstsMvsStage.ParseDriverLicence]: 'Обробка водійського посвідчення',
	[HstsMvsStage.ValidateDriverLicence]: 'Валідація водійського посвідчення',
	[HstsMvsStage.ParseCarInfo]: 'Обробка інформації про автомобіль',
	[HstsMvsStage.ValidateCarInfo]: 'Валідація інформації про автомобіль',
	[HstsMvsStage.ModifyData]: 'Модифікація даних',
	[HstsMvsStage.NormalizeDriverLicenceIssuedBy]:
		'Нормалізація органу видачі водійського посвідчення',
	[HstsMvsStage.NormalizeRegistrationPlace]: 'Нормалізація місця реєстрації',
	[HstsMvsStage.GenerateResultData]: 'Генерація результатів',
	[HstsMvsStage.Finished]: 'Завершено'
}

export const DMSU_STAGES: Record<DmsuStage, string> = {
	[DmsuStage.NotStarted]: 'Не розпочато',
	[DmsuStage.ExtractImageAndRemoveWaterMark]:
		'Обробка зображення та видалення водяного знаку',
	[DmsuStage.ParsePersonInfo]: 'Парсинг особистої інформації',
	[DmsuStage.ValidatePersonInfo]: 'Валідація особистої інформації',
	[DmsuStage.ModifyData]: 'Модифікація даних',
	[DmsuStage.NormalizeGenitiveFullname]:
		'Нормалізація ПІБ у родовому відмінку',
	[DmsuStage.NormalizeBirthPlace]: 'Нормалізація місця народження',
	[DmsuStage.NormalizeRegistarionAddress]: 'Нормалізація адреси реєстрації',
	[DmsuStage.NormalizePassportsIssuer]: 'Нормалізація органу видачі паспорта',
	[DmsuStage.NormalizeForeignPassportsIssuer]:
		'Нормалізація органу видачі закордонного паспорта',
	[DmsuStage.GenerateResultData]: 'Генерація результатних даних',
	[DmsuStage.Finished]: 'Завершено'
}

export const PROCESS_STAGES: Record<ProcessType, Record<string, string>> = {
	[ProcessType.HstsMvs]: HSTS_MVS_STAGES,
	[ProcessType.Dmsu]: DMSU_STAGES
}
