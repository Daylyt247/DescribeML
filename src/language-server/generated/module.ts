/******************************************************************************
 * This file was generated by langium-cli 1.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { DatasetDescriptorAstReflection } from './ast';
import { DatasetDescriptorGrammar } from './grammar';

export const DatasetDescriptorLanguageMetaData: LanguageMetaData = {
    languageId: 'dataset-descriptor',
    fileExtensions: ['.descml'],
    caseInsensitive: false
};

export const DatasetDescriptorGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new DatasetDescriptorAstReflection()
};

export const DatasetDescriptorGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => DatasetDescriptorGrammar(),
    LanguageMetaData: () => DatasetDescriptorLanguageMetaData,
    parser: {}
};
