import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}
const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={classNames(cls.PorfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                {readonly ? (
                    <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <>
                        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>
                        <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
                            {t('Сохранить')}
                        </Button>
                    </>

                )}
            </div>
        </div>
    );
};

export default ProfilePageHeader;
