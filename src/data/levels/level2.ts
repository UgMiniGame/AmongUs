import { ClueUtils } from '@/utils/clueUtils';
import type { LevelConfig } from '@/shared/types';

export const level2: LevelConfig = {
  id: 2,
  gridSize: { rows: 2, cols: 3 },
  startPosition: 'A1',
  impostorCount: 1,
  characters: [
    {
      id: 'char_A1',
      position: 'A1',
      name: '小智',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '我有B1、A2、B2都是我领居，我的右边和下边都是好人',
        type: 'area',
        targetPosition: 'B1',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_B1',
      position: 'B1',
      name: '小丽',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '斜角也算邻居（比如A1和B2是邻居）',
        type: 'area',
        targetPosition: 'C1',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_C1',
      position: 'C1',
      name: '小红',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '当每个人都被询问过，就通关啦',
        type: 'behavior',
        targetPosition: 'A2',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_A2',
      position: 'A2',
      name: '张三',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '我举报小樱是坏蛋记得换成抓捕模式',
        type: 'direct',
        targetPosition: 'B2',
        highlightNames: ['小樱'],
        isUsed: false
      }
    },
    {
      id: 'char_B2',
      position: 'B2',
      name: '小樱',
      state: 'initial',
      identity: {
        isImpostor: true,
        isRevealed: false
      },
      clue: {
        text: '该死是谁告的密!',
        type: 'behavior',
        targetPosition: 'C2',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_C2',
      position: 'C2',
      name: '李四',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '你简直就是福尔摩斯再世!',
        type: 'behavior',
        targetPosition: 'A1',
        highlightNames: [],
        isUsed: false
      }
    }
  ]
}; 