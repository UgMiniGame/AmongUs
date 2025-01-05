import { ClueUtils } from '@/utils/clueUtils';
import type { LevelConfig } from '@/shared/types';

export const level3: LevelConfig = {
  id: 3,
  gridSize: { rows: 3, cols: 3 },
  startPosition: 'A1',
  impostorCount: 4, // B1, C2, A2, B3 是坏人
  characters: [
    {
      id: 'char_A1',
      position: 'A1',
      name: '阿波',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '小彬绑架了我的朋友阿婷快救救阿婷',
        type: 'direct',
        targetPosition: 'B1',
        highlightNames: ['小彬', '阿婷'],
        isUsed: false
      }
    },
    {
      id: 'char_B1',
      position: 'B1',
      name: '小彬',
      state: 'initial',
      identity: {
        isImpostor: true,
        isRevealed: false
      },
      clue: {
        text: '就差那么一点点，我就要绑架成功了！',
        type: 'behavior',
        targetPosition: 'C1',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_C1',
      position: 'C1',
      name: '阿婷',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '我这列只有一个坏蛋他就在我的正下方',
        type: 'area',
        targetPosition: 'C2',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_A2',
      position: 'A2',
      name: '小辉',
      state: 'initial',
      identity: {
        isImpostor: true,
        isRevealed: false
      },
      clue: {
        text: '我的妻子阿慧什么都不知道，别抓她',
        type: 'behavior',
        targetPosition: 'A3',
        highlightNames: ['阿慧'],
        isUsed: false
      }
    },
    {
      id: 'char_B2',
      position: 'B2',
      name: '阿敏',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '小辉差一点就偷走了我的钱包!',
        type: 'direct',
        targetPosition: 'A2',
        highlightNames: ['小辉'],
        isUsed: false
      }
    },
    {
      id: 'char_C2',
      position: 'C2',
      name: '阿岚',
      state: 'initial',
      identity: {
        isImpostor: true,
        isRevealed: false
      },
      clue: {
        text: '打游戏挂机',
        type: 'behavior',
        targetPosition: 'B2',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_A3',
      position: 'A3',
      name: '阿慧',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '天啊!我的丈夫竟然干了这种事?',
        type: 'direct',
        targetPosition: 'B3',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_B3',
      position: 'B3',
      name: '小依',
      state: 'initial',
      identity: {
        isImpostor: true,
        isRevealed: false
      },
      clue: {
        text: '骑电瓶车不戴头盔',
        type: 'behavior',
        targetPosition: 'C3',
        highlightNames: [],
        isUsed: false
      }
    },
    {
      id: 'char_C3',
      position: 'C3',
      name: '小涛',
      state: 'initial',
      identity: {
        isImpostor: false,
        isRevealed: false
      },
      clue: {
        text: '阿敏是我唯一的守法邻居',
        type: 'direct',
        targetPosition: 'B2',
        highlightNames: ['阿敏'],
        isUsed: false
      }
    }
  ]
}; 